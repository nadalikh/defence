"use client";
import {useEffect, useRef, useState} from "react"
import {Feature, Map} from "@neshan-maps-platform/ol"
import NeshanMap from "@neshan-maps-platform/react-openlayers"
import {Point} from "@neshan-maps-platform/ol/geom";
import {fromLonLat, toLonLat} from "@neshan-maps-platform/ol/proj";
import {Icon, Style} from "@neshan-maps-platform/ol/style";
import VectorLayer from "@neshan-maps-platform/ol/layer/Vector";
import VectorSource from "@neshan-maps-platform/ol/source/Vector";
import CurrentLocation from "@/components/map/location";
import useLocation from "@/components/map/hook/useLocation";
import {notif} from "@/components/utils";
import markerIcon from "@/app/images/markerIcon.png"
import currentLocationIcon from "@/app/images/bluecircle.png"

interface Location {
    latitude: number;
    longitude: number;
}

const rawCircleString = `
        <svg xmlns="http://w3.org" viewBox="0 0 120 120" width="44px" height="44px">
            <g id="google-maps-location-dot">
                <!-- Translucent Blue Accuracy Shadow Radius Ring -->
                <circle cx="60" cy="60" r="45" fill="#1A73E8" fill-opacity="0.15" stroke="#1A73E8" stroke-width="1" stroke-opacity="0.3" />
                <!-- Soft Drop Shadow Behind the Core White Border -->
                <circle cx="60" cy="60" r="14" fill="black" opacity="0.15" transform="translate(0, 2)" />
                <!-- Crisp White Outer Ring Shield -->
                <circle cx="60" cy="60" r="14" fill="#FFFFFF" />
                <!-- Signature Google Maps Vivid Blue Center Core Dot -->
                <circle cx="60" cy="60" r="10" fill="#1A73E8" />
            </g>
        </svg>
        `;

export default function Mapp() {
    const [center, setCenter] = useState<Location>({latitude: 35.7665394, longitude: 51.4749824});
    const mapRef = useRef<Map | null>(null);
    const centerMarkerRef = useRef<Feature<Point> | null>(null);
    const currentMarkerRef = useRef<Feature<Point> | null>(null);
    const {location, handleGetLocation} = useLocation();
    useEffect(() => {
        handleGetLocation()
    }, [])
    useEffect(() => {
        console.log("curren location change", location);
        if (currentMarkerRef.current && location.latitude && location.longitude) {
            const newGeometry = new Point(fromLonLat([location.longitude, location.latitude]));
            currentMarkerRef.current.setGeometry(newGeometry);
        }
    }, [location]);
    const flyTo = (targetLat: number, targetLng: number, targetZoom: number = 15) => {
        if (!mapRef.current) return;

        const view = mapRef.current.getView();
        const duration = 2000; // Animation duration in milliseconds (2 seconds)
        const destCoords = fromLonLat([targetLng, targetLat]);

        // Smoothly animate both center and zoom level simultaneously
        view.animate({
            center: destCoords,
            duration: duration,
        });

        view.animate({
            zoom: targetZoom,
            duration: duration,
        });
    };
    const handleMapInit = (map: Map) => {
        mapRef.current = map;
        const markerFeature = new Feature({
            geometry: new Point(fromLonLat([center.latitude, center.longitude])),
        });
        centerMarkerRef.current = markerFeature;
        const markerStyle = new Style({
            image: new Icon({
                src: markerIcon.src, // Neshan default marker icon
                anchor: [0.5, 1], // anchor at bottom-center of the icon
                scale: 1,
            }),
        });

        markerFeature.setStyle(markerStyle);

        const liveLocationFeature = new Feature({
            geometry: new Point(fromLonLat([center.latitude, center.longitude])), // Fallback to initial coords until hook loads
        });
        currentMarkerRef.current = liveLocationFeature;
        const liveLocationStyle = new Style({
            image: new Icon({
                src: currentLocationIcon.src,
                anchor: [0.5, 1], // Center aligned for radar layout targets
                scale: 1,
            }),
        });
        liveLocationFeature.setStyle(liveLocationStyle);

        // Create a vector layer and add the marker
        const markerLayer = new VectorLayer({
            source: new VectorSource({
                features: [markerFeature, liveLocationFeature],
            }),
        });
        map.on("moveend", () => {
            const mapCenter = map.getView().getCenter();
            if (mapCenter) {
                const [lng, lat] = toLonLat(mapCenter);
                setCenter({latitude: lat, longitude: lng});
                if (centerMarkerRef.current) {
                    const newGeometry = new Point(fromLonLat([lng, lat]));
                    centerMarkerRef.current.setGeometry(newGeometry);
                }
            }
        })
        map.addLayer(markerLayer);
    };
    return (
        <div className={"min-h-[35vh] h-[35vh] mt-auto relative"}>
            <button
                onClick={() => {
                    if (location.latitude && location.longitude) flyTo(location.latitude, location.longitude); else notif("موقعیت دستگاه شما پیدا نشده است", false)
                }}
                className={"absolute right-2 bottom-2 z-20 bg-white rounded-full"}>
                <CurrentLocation/>
            </button>
            <p className={'text-xs absolute text-nowrap bg-[#d1d1d1] whitespace-nowrap top-1 right-1 p-2 z-20 rounded-2xl'}>موقعیت:
                <span className={'ltr'}>
                    {center.latitude < 0 ? `${Math.abs(center.latitude)}-` : center.latitude} , {center.longitude < 0 ? `${Math.abs(center.longitude)}-` : center.longitude}
                </span>
            </p>
            <NeshanMap
                mapKey="web.90736ba0532f4b04a51f845ed958354b"
                defaultType="dreamy"
                center={{latitude: center.latitude, longitude: center.longitude}}
                style={{height: "100%", width: "100%"}}
                zoom={11}
                poi={false}
                onInit={handleMapInit}
            ></NeshanMap>
        </div>)
}

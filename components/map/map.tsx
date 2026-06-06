"use client";
import {useEffect, useRef, useState} from "react"
import {Feature, Map} from "@neshan-maps-platform/ol"
import NeshanMap from "@neshan-maps-platform/react-openlayers"
import {Point} from "@neshan-maps-platform/ol/geom";
import {fromLonLat, toLonLat} from "@neshan-maps-platform/ol/proj";
import {Icon, Style} from "@neshan-maps-platform/ol/style";
import VectorLayer from "@neshan-maps-platform/ol/layer/Vector";
import VectorSource from "@neshan-maps-platform/ol/source/Vector";


export default function Mapp() {
    const [lat, setLat] = useState<number>(35.7665394);
    const [lng, setLng] = useState<number>(51.4749824);
    const mapRef = useRef<Map | null>(null);
    const markerRef = useRef<Feature<Point> | null>(null);
    const handleMapInit = (map: Map) => {
        mapRef.current = map;

        // Create a marker feature
        const markerFeature = new Feature({
            geometry: new Point(fromLonLat([lat, lng])),
        });
        markerRef.current = markerFeature;

        // Style the marker with an icon
        const markerStyle = new Style({
            image: new Icon({
                src: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-icon.png", // Neshan default marker icon
                anchor: [0.5, 1], // anchor at bottom-center of the icon
                scale: 1,
            }),
        });

        markerFeature.setStyle(markerStyle);

        // Create a vector layer and add the marker
        const markerLayer = new VectorLayer({
            source: new VectorSource({
                features: [markerFeature],
            }),
        });
        // Listen to map movements
        map.on("moveend", () => {
            const mapCenter = map.getView().getCenter();
            if (mapCenter) {
                const [lng, lat] = toLonLat(mapCenter);
                setLat(lat);
                setLng(lng);
                // Move marker to new center
                if (markerRef.current) {
                    const newGeometry = new Point(fromLonLat([lng, lat]));
                    markerRef.current.setGeometry(newGeometry);
                }
            }

        })
        map.addLayer(markerLayer);

    };
    return (
        <div className={"min-h-[30vh] h-[30vh] mt-auto"}>
            <NeshanMap
                mapKey="web.90736ba0532f4b04a51f845ed958354b"
                defaultType="dreamy"
                center={{latitude: lat, longitude: lng}}
                style={{height: "100%", width: "100%"}}
                zoom={11}
                poi={false}
                onInit={handleMapInit}
            ></NeshanMap>
        </div>
    )
}

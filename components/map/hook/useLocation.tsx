import {useState} from "react";
import {notif} from "@/components/utils";


interface UseLocation {
    latitude?: number;
    longitude?: number;
}
const useLocation = () => {
    const [location, setLocation] = useState<UseLocation>({});
    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            notif("این مرورگر  از GeoLocation پشتیبانی نمیکند", true)
            return;
        }
        navigator.geolocation.getCurrentPosition(
            position => {
                setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },
            err => {
                switch (err.code) {
                    case err.PERMISSION_DENIED:
                        notif('دسترسی داده نشده', true);
                        break;
                    case err.POSITION_UNAVAILABLE:
                        notif('موقعیت دردسترس نیست', true);
                        break;
                    case err.TIMEOUT:
                        notif('اجازه موقعیت داده نشد', true);
                        break;
                    default:
                        notif('ارور نامشخص در موقعیت', true);
                        break;
                }
            },
            {
                enableHighAccuracy: true, // Uses GPS if available instead of just network IP
                timeout: 15000,          // Wait up to 10 seconds
                maximumAge: 0            // Do not use a cached location
            }
        )
    }
    return {location, handleGetLocation}
}
export default useLocation;

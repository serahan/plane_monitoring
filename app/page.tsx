import MapComponent from "@/src/components/MapComponent";
import UiComponent from "@/src/components/ui/UiComponent";

export default function Home() {
    return (
        <div className="w-[100vw] h-[100vh]">
            <UiComponent />
            <MapComponent />
        </div>
    );
}

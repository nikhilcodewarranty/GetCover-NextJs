import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useScrollToSection = () => {
    const router = useRouter();
    const [pendingSection, setPendingSection] = useState(null);

    const scrollToSection = (id) => {
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                const headerOffset = 100; // Adjust based on header height
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });

                // Remove stored section ID after scrolling
                sessionStorage.removeItem("pendingSection");
            }
        }, 500); // Delay ensures content is rendered before scrolling
    };



    useEffect(() => {
        const storedSection = sessionStorage.getItem("pendingSection");
        if (router.pathname === "/" && storedSection) {
            console.log("Scrolling to:", storedSection);
            scrollToSection(storedSection);
        }
    }, [router.pathname]);

    const redirectToSection = (id) => {
        if (router.pathname !== "/") {
            sessionStorage.setItem("pendingSection", id);
            router.push("/");
        } else {
            scrollToSection(id);
        }
    };

    return redirectToSection;
};

export default useScrollToSection;

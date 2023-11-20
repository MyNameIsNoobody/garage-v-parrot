import { ConstructionOutlined, DirectionsCarOutlined, GroupOutlined, RateReviewOutlined, ScheduleOutlined } from "@mui/icons-material";

export let categories = [
    {
        name: "",
        links: [
            {
                name: "Véhicules",
                icon: <DirectionsCarOutlined />,
                to: "/admin/vehicles"
            },
            {
                name: "Témoignages",
                icon: <RateReviewOutlined />,
                to: "/admin/reviews"
            },
            {
                name: "Utilisateurs",
                icon: <GroupOutlined />,
                to: "/admin/users"
            },
            {
                name: "Horaires d'ouverture",
                icon: <ScheduleOutlined />,
                to: '/admin/schedules'
            },
            {
                name: "Services",
                icon: <ConstructionOutlined />,
                to: '/admin/services'
            },
        ]
    }
]
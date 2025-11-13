import { useSelector } from "react-redux";
import { Card, CardDescription, CardTitle } from "../Card/Card";
import { PanelContainer } from "./PanelStyles";
import { RootState } from "../../store/store";

export function Panel() {
    const geo = useSelector((state: RootState) => state.geo);
    return (
        <PanelContainer>
            <Card>
                <CardTitle>ip address</CardTitle>
                <CardDescription>{geo.ip}</CardDescription>
            </Card>
            <Card>
                <CardTitle>location</CardTitle>
                <CardDescription>{geo.city}</CardDescription>
            </Card>
            <Card>
                <CardTitle>timezone</CardTitle>
                <CardDescription>UTC {geo.timezone}</CardDescription>
            </Card>
            <Card>
                <CardTitle>isp</CardTitle>
                <CardDescription>{geo.isp}</CardDescription>
            </Card>
        </PanelContainer>
    )
}
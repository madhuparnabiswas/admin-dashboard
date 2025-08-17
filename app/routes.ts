import { type RouteConfig, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx", [route('dashboard', 'routes/admin/dashboard.tsx'), route('clients', 'routes/admin/all-users.tsx')]),

] satisfies RouteConfig;
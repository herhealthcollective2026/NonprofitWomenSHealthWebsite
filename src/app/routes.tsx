import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Resources } from "./pages/Resources";
import { HealthEducation } from "./pages/HealthEducation";
import { EducationTopic } from "./pages/EducationTopic";
import { OurKits } from "./pages/OurKits";
import { About } from "./pages/About";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "resources", Component: Resources },
      { path: "health-education", Component: HealthEducation },
      { path: "health-education/:topicId", Component: EducationTopic },
      { path: "our-kits", Component: OurKits },
      { path: "about", Component: About },
    ],
  },
]);

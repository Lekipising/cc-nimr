"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function BreadCrumbs() {
  const currentPath = usePathname();
  const dashboardPaths = [
    "/dashboard",
    "/dashboard/deliveries",
    "/dashboard/patients",
    "/dashboard/riders",
    "/dashboard/admin",
  ];

  const pathSegments = currentPath.split("/").filter(Boolean);

  if (
    pathSegments.length < 3 &&
    dashboardPaths.includes(`/${pathSegments[0]}`)
  ) {
    return (
      <h1 className="text-2xl text-[#2A2A2A] capitalize">
        {pathSegments[pathSegments.length - 1] === "dashboard"
          ? "Overview"
          : pathSegments[1]}
      </h1>
    );
  }

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const pathUpToThisSegment = `/${pathSegments
      .slice(0, index + 1)
      .join("/")}`;

    let label = segment;

    // Customize labels for specific paths
    if (pathUpToThisSegment === "/dashboard/patients") {
      label = "Patients";
    } else if (
      pathUpToThisSegment.startsWith("/dashboard/patients/") &&
      pathSegments.length === 3
    ) {
      label = "View Patient";
    } else if (
      pathUpToThisSegment.includes("assign-package") &&
      pathSegments.length === 4
    ) {
      label = "Assign Package to Patient";
    }

    if (label === "dashboard") return null;

    return (
      <React.Fragment key={segment}>
        {index > 1 && <span> / </span>}
        {index === pathSegments.length - 1 ? (
          <span className="font-medium capitalize text-2xl">{label}</span>
        ) : (
          <Link
            href={pathUpToThisSegment}
            className="capitalize text-nim-300 font-medium"
          >
            {label}
          </Link>
        )}
      </React.Fragment>
    );
  });

  return <div className="text-[#2A2A2A]">{breadcrumbItems}</div>;
}

"use client";

import * as React from "react";

import Image from "next/image";

import ActivityCalendar, {
  type CalendarData,
  type Props as CalendarProps,
} from "react-activity-calendar";
import ReactTooltip from "react-tooltip";

type Props = {
  data: CalendarData;
  github_user_archives: any;
};

export default function ArchiveCalendar({ data, github_user_archives }: Props) {
  const [imageUrl, setImageUrl] = React.useState("");

  const handleImageUrl = (date: string) => {
    const archive = github_user_archives.find(
      (archive: any) => archive.date === date
    );

    if (archive) {
      setImageUrl(archive.image_url);
    } else {
      setImageUrl("");
    }
  };

  return (
    <>
      <div className="grid place-items-center py-5 sm:px-5">
        <ActivityCalendar
          data={data}
          labels={{
            legend: {
              less: "Less",
              more: "More",
            },
            months: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            tooltip: "<strong>{{count}} click</strong> on {{date}}",
            totalCount: "{{count}} Clicks in {{year}}",
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          }}
          eventHandlers={{
            onClick: (event) => (data) => {
              handleImageUrl(data.date);
            },
          }}
        >
          <ReactTooltip delayShow={10} html />
        </ActivityCalendar>
      </div>
      <div className="border mx-3 border-gray-200 dark:border-gray-700"></div>
      <div className="px-1 py-5">
        {imageUrl && imageUrl !== "" ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/archive?image_url=${imageUrl}`}
            alt="archive"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <div className="text-center">
            {imageUrl === ""
              ? "Click on a date to see the archive"
              : "No click found for the selected date"}
          </div>
        )}
      </div>
    </>
  );
}

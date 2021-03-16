import Icons from "../components/Icons";
import {
  faInbox,
  faExclamationTriangle,
  faHistory,
  faComment,
  faBell,
  faPlusCircle,
  faFilter,
  faSortAmountDown,
  faSearch,
  faMapMarkerAlt,
  faPencilAlt,
  faPaperPlane,
  faCalendarCheck,
  faCalendar,
  faWrench,
  faCheckCircle,
  faTimesCircle,
  faCalendarPlus,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export const config = {
  leftPanel: {
    logo: {
      src: Icons.logo,
      titleLines: ["Tenega", "Nasional"],
    },
    linkList: [
      {
        link: "/claims",
        title: "Claims",
        icon: faInbox,
        isActive: true,
      },
      {
        link: "/outages",
        title: "Outages",
        icon: faExclamationTriangle,
      },
      {
        link: "/history",
        title: "History",
        icon: faHistory,
      },
      {
        link: "/messages",
        title: "Messages",
        icon: faComment,
      },
      {
        link: "/notifications",
        title: "Notifications",
        icon: faBell,
      },
    ],
  },
  claims: {
    requestList: [
      {
        id: 1,
        isActive: true,
        appointment: {
          date: "3",
          month: "MAR",
          time: "12:33",
          topColor: "#30B76A",
          bottomColor: "#32CB71",
        },
        taskText: "Over Voltage Inspection",
        editIcon: faPencilAlt,
        actionButton: {
          text: "New Claim",
          backgroundColor: "#4686FA",
        },
        notes: "Notes: Please check Microwave, Fridge & TV",
        customer: {
          name: "En. Fikhri Amin",
          address: "Taman Connaught, 56000 Kuala Lumpur",
          locationIcon: faMapMarkerAlt,
          email: "fikhriamin@gmail.com",
          contact: "+6012 323 4344",
          callText: "Call",
          messageText: "Message",
          callIcon: Icons.phone,
          messageIcon: Icons.message,
        },
        map: {
          title: "One South seri kembangan",
          query: "One South seri kembangan",
          width: "100%",
          height: "100%",
        },
        progress: {
          title: "Progress",
          checkList: [
            {
              title: "Claim Request Submitted",
              dateTime: "2020/03/21 - 09:00",
              calendarIcon: faCalendar,
              itemIcon: faPaperPlane,
              isDone: true,
            },
            {
              title: "Technician Appointed",
              dateTime: "2020/03/21 - 09:10",
              calendarIcon: faCalendar,
              itemIcon: faCalendarCheck,
              isDone: true,
            },
            {
              title: "Site Inspection in Progress...",
              itemIcon: faWrench,
              isDone: true,
            },
            {
              title: "Completed",
              itemIcon: faCheckCircle,
              isDone: false,
            },
          ],
          status: [
            {
              text: "Reject",
              backgroundColor: "#FECFCF",
              icon: faTimesCircle,
            },
            {
              text: "Approve",
              backgroundColor: "#DBDBDB",
              icon: faCheckCircle,
            },
            {
              text: "Appointment",
              backgroundColor: "#CFD5FE",
              icon: faCalendarPlus,
            },
            {
              text: "Paid",
              backgroundColor: "#CFFEF4",
              icon: faDollarSign,
            },
          ],
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
        report: {
          title: "Technical Report",
          noteTitle: "Notes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
          demageListTitle: "Demage List",
          demageList: [
            "1 - SAMSUNG MS23K3513AK Solo Microwave Oven",
            "1 - ELBA ITALY 250L 2-DOOR FRIDGE ER-G2521",
            "1 - Panasonic TH-40G300K",
            "1 - Slim Bezel 40 Inch LED TV",
            "5 - LED T5 Tube Light T5 Light Drop",
          ],
          demagePicturesTitle: "Total Demage Value",
          demageValue: "RM 2,545",
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
      },
      {
        id: 2,
        appointment: {
          date: "2",
          month: "MAR",
          time: "9:00",
          topColor: "#30B76A",
          bottomColor: "#32CB71",
        },
        taskText: "Over Voltage Inspection",
        actionButton: {
          text: "Appointed",
          backgroundColor: "#322DC5",
        },
        notes: "Notes: Please check Microwave, Fridge & TV",
        customer: {
          name: "Ms. Tharshini Uthravathi",
          address: "Taman Connaught, 56000 Kuala Lumpur",
          locationIcon: faMapMarkerAlt,
          email: "harshini@gmail.com",
          contact: "+6012 423 4531",
          callText: "Call",
          messageText: "Message",
          callIcon: Icons.phone,
          messageIcon: Icons.message,
        },
        map: {
          title: "Bukit Jalil Stadium",
          query: "Bukit Jalil Stadium",
          width: "100%",
          height: "100%",
        },
        progress: {
          title: "Progress",
          checkList: [
            {
              title: "Claim Request Submitted",
              dateTime: "2020/03/21 - 09:00",
              calendarIcon: faCalendar,
              itemIcon: faPaperPlane,
              isDone: true,
            },
            {
              title: "Technician Appointed",
              dateTime: "2020/03/21 - 09:10",
              calendarIcon: faCalendar,
              itemIcon: faCalendarCheck,
              isDone: true,
            },
            {
              title: "Site Inspection in Progress...",
              itemIcon: faWrench,
              isDone: true,
            },
            {
              title: "Completed",
              itemIcon: faCheckCircle,
              isDone: false,
            },
          ],
          status: [
            {
              text: "Reject",
              backgroundColor: "#FECFCF",
              icon: faTimesCircle,
            },
            {
              text: "Approve",
              backgroundColor: "#DBDBDB",
              icon: faCheckCircle,
            },
            {
              text: "Appointment",
              backgroundColor: "#CFD5FE",
              icon: faCalendarPlus,
            },
            {
              text: "Paid",
              backgroundColor: "#CFFEF4",
              icon: faDollarSign,
            },
          ],
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
        report: {
          title: "Technical Report",
          noteTitle: "Notes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
          demageListTitle: "Demage List",
          demageList: [
            "1 - SAMSUNG MS23K3513AK Solo Microwave Oven",
            "1 - ELBA ITALY 250L 2-DOOR FRIDGE ER-G2521",
            "1 - Panasonic TH",
            "1 - Slim Bezel 40 Inch LED TV",
            "5 - LED T5 Tube Light T5 Light Drop",
          ],
          demagePicturesTitle: "Total Demage Value",
          demageValue: "RM 2,345",
          imageList: [
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
          ],
        },
      },
      {
        id: 3,
        appointment: {
          date: "25",
          month: "FEB",
          time: "12:33",
          topColor: "#DEB921",
          bottomColor: "#ECC93C",
        },
        taskText: "Over Voltage Inspection",
        actionButton: {
          text: "Approved",
          backgroundColor: "#2DC57C",
        },
        notes: "Notes: Please check Microwave, Fridge & TV",
        customer: {
          name: "Ms. Patricia Chin",
          address: "Taman Connaught, 56000 Kuala Lumpur",
          locationIcon: faMapMarkerAlt,
          email: "patricia@gmail.com",
          contact: "+6012 432 5426",
          callText: "Call",
          messageText: "Message",
          callIcon: Icons.phone,
          messageIcon: Icons.message,
        },
        map: {
          title: "Brickfields kuala lumpur",
          query: "Brickfields kuala lumpur",
          width: "100%",
          height: "100%",
        },
        progress: {
          title: "Progress",
          checkList: [
            {
              title: "Claim Request Submitted",
              dateTime: "2020/03/21 - 09:00",
              calendarIcon: faCalendar,
              itemIcon: faPaperPlane,
              isDone: true,
            },
            {
              title: "Technician Appointed",
              dateTime: "2020/03/21 - 09:10",
              calendarIcon: faCalendar,
              itemIcon: faCalendarCheck,
              isDone: true,
            },
            {
              title: "Site Inspection in Progress...",
              itemIcon: faWrench,
              isDone: true,
            },
            {
              title: "Completed",
              itemIcon: faCheckCircle,
              isDone: false,
            },
          ],
          status: [
            {
              text: "Reject",
              backgroundColor: "#FECFCF",
              icon: faTimesCircle,
            },
            {
              text: "Approve",
              backgroundColor: "#DBDBDB",
              icon: faCheckCircle,
            },
            {
              text: "Appointment",
              backgroundColor: "#CFD5FE",
              icon: faCalendarPlus,
            },
            {
              text: "Paid",
              backgroundColor: "#CFFEF4",
              icon: faDollarSign,
            },
          ],
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
        report: {
          title: "Technical Report",
          noteTitle: "Notes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
          demageListTitle: "Demage List",
          demageList: [
            "1 - SAMSUNG MS23K3513AK Solo Microwave Oven",
            "1 - ELBA ITALY 250L 2-DOOR FRIDGE ER-G2521",
            "1 - Panasonic TH",
            "1 - Slim Bezel 40 Inch LED TV",
            "5 - LED T5 Tube Light T5 Light Drop",
          ],
          demagePicturesTitle: "Total Demage Value",
          demageValue: "RM 2,345",
          imageList: [
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
          ],
        },
      },
      {
        id: 4,
        appointment: {
          date: "3",
          month: "MAR",
          time: "12:33",
          topColor: "#D0422A",
          bottomColor: "#E15137",
        },
        taskText: "Over Voltage Inspection",
        actionButton: {
          text: "New Claim",
          backgroundColor: "#F64747",
        },
        notes: "Notes: Please check Microwave, Fridge & TV",
        customer: {
          name: "Ms. Salmi Zulaikha",
          address: "Taman Connaught, 56000 Kuala Lumpur",
          locationIcon: faMapMarkerAlt,
          email: "salmiq141@gmail.com",
          contact: "+6012 989 9876",
          callText: "Call",
          messageText: "Message",
          callIcon: Icons.phone,
          messageIcon: Icons.message,
        },
        progress: {
          title: "Progress",
          checkList: [
            {
              title: "Claim Request Submitted",
              dateTime: "2020/03/21 - 09:00",
              calendarIcon: faCalendar,
              itemIcon: faPaperPlane,
              isDone: true,
            },
            {
              title: "Technician Appointed",
              dateTime: "2020/03/21 - 09:10",
              calendarIcon: faCalendar,
              itemIcon: faCalendarCheck,
              isDone: true,
            },
            {
              title: "Site Inspection in Progress...",
              itemIcon: faWrench,
              isDone: true,
            },
            {
              title: "Completed",
              itemIcon: faCheckCircle,
              isDone: false,
            },
          ],
          status: [
            {
              text: "Reject",
              backgroundColor: "#FECFCF",
              icon: faTimesCircle,
            },
            {
              text: "Approve",
              backgroundColor: "#DBDBDB",
              icon: faCheckCircle,
            },
            {
              text: "Appointment",
              backgroundColor: "#CFD5FE",
              icon: faCalendarPlus,
            },
            {
              text: "Paid",
              backgroundColor: "#CFFEF4",
              icon: faDollarSign,
            },
          ],
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
        map: {
          title: "Petronas Twin tower",
          query: "Petronas Twin tower",
          width: "100%",
          height: "100%",
        },
        report: {
          title: "Technical Report",
          noteTitle: "Notes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
          demageListTitle: "Demage List",
          demageList: [
            "1 - SAMSUNG MS23K3513AK Solo Microwave Oven",
            "1 - ELBA ITALY 250L 2-DOOR FRIDGE ER-G2521",
            "1 - Panasonic TH",
            "1 - Slim Bezel 40 Inch LED TV",
            "5 - LED T5 Tube Light T5 Light Drop",
          ],
          demagePicturesTitle: "Total Demage Value",
          demageValue: "RM 2,345",
          imageList: [
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
      },
      {
        id: 5,
        appointment: {
          date: "3",
          month: "MAR",
          time: "12:33",
          topColor: "#30B76A",
          bottomColor: "#32CB71",
        },
        taskText: "Over Voltage Inspection",
        actionButton: {
          text: "New Claim",
          backgroundColor: "#4686FA",
        },
        notes: "Notes: Please check Microwave, Fridge & TV",
        customer: {
          name: "En. Fikhri Amin",
          address: "Taman Connaught, 56000 Kuala Lumpur",
          locationIcon: faMapMarkerAlt,
          email: "fikhri@gmail.com",
          contact: "+6012 457 1234",
          callText: "Call",
          messageText: "Message",
          callIcon: Icons.phone,
          messageIcon: Icons.message,
        },
        map: {
          title: "Batu Caves",
          query: "Batu Caves",
          width: "100%",
          height: "100%",
        },
        progress: {
          title: "Progress",
          checkList: [
            {
              title: "Claim Request Submitted",
              dateTime: "2020/03/21 - 09:00",
              calendarIcon: faCalendar,
              itemIcon: faPaperPlane,
              isDone: true,
            },
            {
              title: "Technician Appointed",
              dateTime: "2020/03/21 - 09:10",
              calendarIcon: faCalendar,
              itemIcon: faCalendarCheck,
              isDone: true,
            },
            {
              title: "Site Inspection in Progress...",
              itemIcon: faWrench,
              isDone: true,
            },
            {
              title: "Completed",
              itemIcon: faCheckCircle,
              isDone: false,
            },
          ],
          status: [
            {
              text: "Reject",
              backgroundColor: "#FECFCF",
              icon: faTimesCircle,
            },
            {
              text: "Approve",
              backgroundColor: "#DBDBDB",
              icon: faCheckCircle,
            },
            {
              text: "Appointment",
              backgroundColor: "#CFD5FE",
              icon: faCalendarPlus,
            },
            {
              text: "Paid",
              backgroundColor: "#CFFEF4",
              icon: faDollarSign,
            },
          ],
          imageList: [
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://i.pinimg.com/474x/c1/62/58/c162589a77f4ba6f613522ca2d87caa1.jpg",
          ],
        },
        report: {
          title: "Technical Report",
          noteTitle: "Notes",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm",
          demageListTitle: "Demage List",
          demageList: [
            "1 - SAMSUNG MS23K987AK Solo Microwave Oven",
            "1 - ELBA ITALY 150L DOOR FRIDGE ER-G2521",
            "1 - Panasonic TH",
            "1 - Slim Bezel 42 Inch LED TV",
            "5 - LED T5 Tube Light T5 Light Drop",
          ],
          demagePicturesTitle: "Total Demage Value",
          demageValue: "RM 2,345",
          imageList: [
            "https://mw1.gstatic.com/crisisresponse/2013/2013-oklahoma-tornado/digitalglobe/OK_PO_1194054_GE1_2013_05_23_maptiles/3756_6469_14.png",
            "https://m.media-amazon.com/images/I/713-GUL1g+L._CR204,0,1224,1224_UX256.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71V5hdecZqL._CR204,0,1224,1224_UX256.jpg",
            "https://m.media-amazon.com/images/I/711jpolGPtL._CR204,0,1224,1224_UX256.jpg",
          ],
        },
      },
    ],
    mainText: "Claim Requests",
    addIcon: faPlusCircle,
    filterIcon: faFilter,
    sortIcon: faSortAmountDown,
    searchIcon: faSearch,
    placeHolderText: "Search by name, account number",
  },
};

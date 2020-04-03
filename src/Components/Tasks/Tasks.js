import React from "react";
import List from "../List";
import Tag from "../Tag";
import MaterialTable from "material-table";
import { Search, ThreeDRotation } from "@material-ui/icons";
import "./Tasks.scss";

const tags = [
  { id: 0, classes: "badge badge-pill ", name: "All" },
  { id: 1, classes: "badge badge-pill badge-primary", name: "Primary" },
  { id: 2, classes: "badge badge-pill badge-secondary", name: "Secondary" },
  { id: 3, classes: "badge badge-pill badge-success", name: "Success" },
  { id: 4, classes: "badge badge-pill badge-danger", name: "Danger" },
  { id: 5, classes: "badge badge-pill badge-warning", name: "Warning" },
  { id: 6, classes: "badge badge-pill badge-info", name: "Info" },
  { id: 7, classes: "badge badge-pill badge-light", name: "Light" },
  { id: 8, classes: "badge badge-pill badge-dark", name: "Dark" },
];
const tasks = [{ id: 0, classes: "badge badge-pill ", name: "All" }];

function Tasks() {
  return (
    <div className="d-flex flex-column flex-wrap align-items-center h-100">
      <div className=" h-100 w-25">
        <List items={tags}>
          <Tag />
        </List>
      </div>
      <div className="h-50 w-75">
        {
          <MaterialTable
            title="New Sprint"
            columns={[
              { title: "Name", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              },
            ]}
            data={[
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
            ]}
            actions={[
              {
                icon: "add",
                tooltip: "Add User",
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row"),
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#F8F9FA",
                color: "#030303",
              },
              cellStyle: {
                padding: "5px 10px",
              },
            }}
          />
        }
      </div>
      <div className="h-50 w-75">
        {
          <MaterialTable
            title="All tasks"
            columns={[
              { title: "Name", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth Place",
                field: "birthCity",
                lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              },
            ]}
            data={[
              {
                name: "Mehmet",
                surname: "Baran",
                birthYear: 1987,
                birthCity: 63,
              },
              {
                name: "Zerya Betül",
                surname: "Baran",
                birthYear: 2017,
                birthCity: 34,
              },
            ]}
            actions={[
              {
                icon: "add",
                tooltip: "Add User",
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row"),
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: "#F8F9FA",
                color: "#030303",
              },

              cellStyle: {
                padding: "5px 10px",
              },
            }}
          />
        }
      </div>
    </div>
  );
}

export default Tasks;

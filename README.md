# Blockchain Interoperability Dashboard

Recommended stack:
- wsl2
- vscode
- Windows Terminal (not required, but makes using wsl convenient)


## Setting up development environment:

1. Install npm by: `sudo apt install npm`
    - Optional: also install yarn to manage packages
2. cd to the root of the project directory
3. run `npm install` to install necessary pages

## Website structure

**Projects Overview**
- Table of existing projects
    - columns: 
    - row:
        - Clicking on a row should open a popup (or a side page) for more details about the project

**Interoperability Project Page**
- One for each project
- Clicking on a table row should bring the user to this page

**Interoperability Projects Attacks**
- Dashboard of charts
    - Dynamic bubble chart for each attack instance
    - Line plot of cumultive money lost in all historical attacks


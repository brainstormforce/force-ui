
# Project Setup

  

## Prerequisites

-  [Node.js](https://nodejs.org/) installed

-  [Local by Flywheel](https://localwp.com/) for WordPress site setup

  

---

  

## Step 1: Setup WordPress Site

  

1.  **Create a WordPress site** using [Local by Flywheel](https://localwp.com/).

  

2.  **Navigate to the WordPress plugins folder**:

```

<local-site-folder>/app/public/wp-content/plugins

```

  

3.  **Clone the repositories** for ForceUI and SureRank into the `plugins` folder:

- For ForceUI:

```bash

git clone <forceui-repository-url>

cd forceui

git checkout staging

```

- For SureRank:

```bash

git clone <surerank-repository-url>

cd surerank

git checkout fui-setup

```

  

---

  

## Step 2: Setup ForceUI

  

1.  **Navigate to the ForceUI directory** (if not already there):

```bash

cd force-ui

```

  

2.  **Install dependencies**:

```bash

npm install

```

  

3.  **Build the project**:

```bash

npm run build

```

  

4.  **Link the package**:

```bash

npm link

```

  

5.  **Start the application**:

```bash

npm start

```

  

6.  **For Storybook**:

In a separate terminal, run:

```bash

npm run storybook

```

  

---

  

## Step 3: Setup SureRank

  

1.  **Navigate to the SureRank directory** (if not already there):

```bash

cd ../surerank

```

  

2.  **Install dependencies**:

```bash

npm install

```

  

3.  **Link ForceUI**:

```bash

npm link @bsf/force-ui

```

  

4.  **Start the application**:

```bash

npm start

```

  

---

  

## Step 4: Making Changes

  

-  **UI Changes in SureRank**:

Modify the UI in the `surerank/sr/apps/fui-dashboard/` directory.

  

-  **Component Changes in ForceUI**:

Make changes to components in the `forceui/src/components/` directory.

## Step 5: Viewing the UI 
1. **Go to WordPress** and open the admin dashboard. 
2. On the **left panel**, locate and open **SureRank**. 
3. Inside SureRank, select **FUI** to view the UI.

## Step 5: Viewing the Storybook
1. Open http://localhost:6006 in the browser
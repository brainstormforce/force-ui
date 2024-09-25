# Breadcrumb Component

## `Breadcrumb` Props
- **Description:** Wrapper for breadcrumb items.  

### children
- **type:** `ReactNode`
- **description:** The breadcrumb items to be displayed inside the breadcrumb navigation.

### size (optional)
- **type:** `string`
- **default value:** `sm`
- **description:** The size of the breadcrumb, can be `sm` or `md`.

## `Breadcrumb.List` Props
- **Description:** Wrapper for the breadcrumb list.  

### children
- **type:** `ReactNode`
- **description:** The child items to be rendered as a list of breadcrumb items.

## `Breadcrumb.Item` Props
- **Description:** Represents a single breadcrumb item.  

### children
- **type:** `ReactNode`
- **description:** The content for the breadcrumb item, usually containing a link or static text.

## `Breadcrumb.Link` Props
- **Description:** The clickable link within a breadcrumb item.

### href (required)
- **type:** `string`
- **description:** The URL the breadcrumb item will link to.

### children
- **type:** `ReactNode`
- **description:** The content to be displayed as the breadcrumb link.

### className (optional)
- **type:** `string`
- **description:** Additional classes to customize the link styles.

## `Breadcrumb.Separator` Props
- **Description:** Separator used between breadcrumb items.

### type (optional)
- **type:** `string`
- **default value:** `arrow`
- **description:** The type of separator between breadcrumb items, can be either `slash` ("/") or `arrow` (">").

## `Breadcrumb.Ellipsis` Props
- **Description:** Displays an ellipsis when the breadcrumb list is too long, or represents hidden items.

## `Breadcrumb.Page` Props
- **Description:** Represents the current page in the breadcrumb trail, displayed as static text instead of a link.

### children
- **type:** `ReactNode`
- **description:** The content representing the current page.

### Example:

```jsx
<Breadcrumb>
    <Breadcrumb.Item>
        <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator type="slash" />
    <Breadcrumb.Item>
        <Breadcrumb.Link href="/category">Category</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
        <Breadcrumb.Page>Current Page</Breadcrumb.Page>
    </Breadcrumb.Item>
</Breadcrumb>

# Page Layout

Dux Refine handles the basic layout components such as the header, sidebar, and menu for you. You just need to customize the content component.

## Page Component

You can use the following component to wrap the content of the page:

```jsx
import { Main } from '@duxweb/dux-refine'

<Main>
  {/* Content area */}
</Main>
```

## Page Header Component

The page header component includes breadcrumb navigation. You can place custom right-side components within it:

```jsx
import { Main, MainHeader } from '@duxweb/dux-refine'

<Main>
  <MainHeader>
    {/* Custom content for the page header */}
  </MainHeader>
  {/* Content area */}
</Main>
```
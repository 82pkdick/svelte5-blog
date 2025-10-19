<script lang="ts">
  /**
   * s付きの $app/stores はdeprecated
   * base もdeprecated, Use resolve(...) instead
   */
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  type NavItem = {
    href: string;
    label: string;
    matchPath?: string;
  };

  type NavUrl = {
    href: string;
    label: string;
    matchPath?: string;
    resolvedUrl?: `./${string}`;
  };

  const navItems: NavItem[] = [
    { href: "/", label: "ホーム" },
    { href: "/blog", label: "ブログ", matchPath: "/blog" },
    { href: "/about", label: "About" },
  ];

  let currentPath = $derived(page.url.pathname);

  function isActive(item: NavItem): boolean {
    let base = resolve("/blog");
    const path = currentPath.replace(base, "") || "/";
    if (item.href === "/" && path === "/") {
      return true;
    }
    if (item.href !== "/" && path.startsWith(item.matchPath || item.href)) {
      return true;
    }
    return false;
  }

  // resolveを使用してナビゲーションURLを解決
  const homeUrl = resolve("/");
  const navUrls = $derived(
    navItems.map((item) => ({
      ...item,
      resolvedUrl: resolve(item.href),
    }))
  );

  // console.log("A01: ", $inspect(navUrls));
  // console.log("A02: ", resolve("/"));
  // console.log("A02: ", resolve("/blog"));
  // console.log("A02: ", resolve("/about"));
  // for (let i = 0; i < navItems.length; i++) {
  //   console.log("A01: ", typeof navItems[i].href);
  // }
  // navItems.map((item) => console.log("A03: ", item.href));
</script>

<nav class="navbar">
  <div class="nav-container">
    <a href={homeUrl} class="logo">My Blog</a>
    <ul class="nav-menu">
      {#each navUrls as item}
        <li>
          <a
            href={item.resolvedUrl}
            class:active={isActive(item)}
            aria-current={isActive(item) ? "page" : undefined}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background: var(--color-bg-secondary);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text);
  }

  .nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-menu a {
    text-decoration: none;
    color: var(--color-text-secondary);
    transition: color 0.2s;
  }

  .nav-menu a:hover,
  .nav-menu a.active {
    color: var(--color-primary);
  }
</style>

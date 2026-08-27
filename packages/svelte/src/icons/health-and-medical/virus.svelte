<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 12a5 5 0 0 0 1.464 3.536M7 12a5 5 0 0 1 1.464-3.536M7 12H3m5.464 3.536A5 5 0 0 0 12 17m-3.536-1.464-2.828 2.828M12 17a5 5 0 0 0 3.536-1.464M12 17v4m3.536-5.464A5 5 0 0 0 17 12m-1.464 3.536 2.828 2.828M17 12a5 5 0 0 0-1.464-3.536M17 12h4m-5.464-3.536A5 5 0 0 0 12 7m3.536 1.464 2.828-2.828M12 7a5 5 0 0 0-3.536 1.464M12 7V3M8.464 8.464 5.636 5.636M11 3h2m4.657 1.929 1.414 1.414M21 11v2m-1.929 4.657-1.414 1.414M13 21h-2m-4.657-1.929L4.93 17.657M3 13v-2m1.929-4.657L6.343 4.93\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>

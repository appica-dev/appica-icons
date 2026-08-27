<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672-2.322A9 9 0 0 0 7.98 3.948M3.6 9H9m4 0h7.4M3.6 15H15m4 0h1.4M11.5 3a17 17 0 0 0-1.493 3.022M9.16 9.167c-.68 4.027.1 8.244 2.34 11.833m1-18a17 17 0 0 1 2.549 8.005m-.207 3.818A17 17 0 0 1 12.5 21M3 3l18 18\"/>";
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

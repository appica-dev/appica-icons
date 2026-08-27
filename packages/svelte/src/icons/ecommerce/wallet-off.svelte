<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3m0 7a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6m12 6h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18\"/>";
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

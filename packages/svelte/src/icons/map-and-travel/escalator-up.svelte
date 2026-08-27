<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 10V3m0 0L3 6m3-3 3 3m10.5 1h-2.672a2 2 0 0 0-1.414.586L7 16H4.5a2.5 2.5 0 0 0 0 5h3.672a2 2 0 0 0 1.414-.586L18 12h1.5a2.5 2.5 0 0 0 0-5\"/>";
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

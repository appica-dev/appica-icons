<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5m0 0v4.5m0-4.5h-4.5\"/>";
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

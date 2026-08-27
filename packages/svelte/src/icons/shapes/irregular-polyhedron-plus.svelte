<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.002 12 4.25 5.869a1 1 0 0 1 .592-1.204l6.282-2.503a2.46 2.46 0 0 1 1.756 0l6.282 2.503a1 1 0 0 1 .592 1.205L18.002 12l-5.21 1.862a2.34 2.34 0 0 1-1.58 0zm0 0L4.25 18.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.22-.088M4.503 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622-2.33m-7.5 16.5V8m4 11h6m-3-3v6\"/>";
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

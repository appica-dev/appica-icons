<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 3h6m-2 6h1m0 0 .569 1.564M14 9V3m-4 0v3m-.268 3.736L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1l-1.143-3.142M3 3l18 18\"/>";
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

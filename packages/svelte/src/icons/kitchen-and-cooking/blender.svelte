<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 10H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10.802a1 1 0 0 1 .984 1.179L16 15M8 4l2 11m2-11V3h2v1m-1 14v.01M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3\"/>";
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

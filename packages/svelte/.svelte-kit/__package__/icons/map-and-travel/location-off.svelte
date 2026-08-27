<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.72 6.712 21 3l-3.723 10.313m-1.056 2.925L14.5 21a.551.551 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1l4.775-1.724M3 3l18 18\"/>";
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

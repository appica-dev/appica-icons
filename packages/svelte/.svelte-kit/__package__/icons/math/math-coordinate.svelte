<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.5 2 12 3.5m0 0V5m0-1.5L10.5 2M2 14h3l-3 3h3m14-3 1.5 1.5m0 0L22 17m-1.5-1.5L22 14m-1.5 1.5L19 17m-7-9v8m0 0-9 6m9-6 9 6\"/>";
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

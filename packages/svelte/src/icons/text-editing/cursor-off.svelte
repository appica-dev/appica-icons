<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 4a3 3 0 0 1 3 3m0 0v1m0-1a3 3 0 0 1 3-3m-3 13a3 3 0 0 1-3 3m3-3v-5m0 5a3 3 0 0 0 3 3M3 3l18 18\"/>";
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

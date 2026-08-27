<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 19 20h-4a1 1 0 0 1-1-1v-4c0-.276.111-.525.292-.706M14 7h6m-3-3v6M3 3l18 18M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"/>";
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

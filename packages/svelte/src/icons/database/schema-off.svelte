<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2m-8-2h2M7.5 7.5V10m0 4v4M3 3l18 18M5 18h5v4H5zm0-8h5v4H5z\"/>";
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

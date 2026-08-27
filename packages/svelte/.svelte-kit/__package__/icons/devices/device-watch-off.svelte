<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 6h5m0 0a3 3 0 0 1 3 3v5m-3-8V3H9v2m8.11 12.132A3 3 0 0 1 15 18m0 0H9m6 0v3H9v-3m0 0a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1M3 3l18 18\"/>";
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

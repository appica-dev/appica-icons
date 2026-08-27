<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 13h6M9 8l3 4.5m0 0L15 8m-3 4.5V17m-9-5a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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

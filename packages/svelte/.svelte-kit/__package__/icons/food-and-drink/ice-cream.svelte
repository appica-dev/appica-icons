<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21.5V17m4-10v10H8V7a4 4 0 0 1 8 0m0 0-8 3.5m0 4 8-3.5\"/>";
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

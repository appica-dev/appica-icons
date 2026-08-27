<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.27 20.925q-.138.039-.277.075a12.01 12.01 0 0 1-7.432-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6c.597 2.028.647 4.178.145 6.232M16.997 21l4.002-4m-5.003 2a3 3 0 0 0 3.002 3A3.003 3.003 0 0 0 22 19a3 3 0 0 0-3.002-3 3.003 3.003 0 0 0-3.002 3\"/>";
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

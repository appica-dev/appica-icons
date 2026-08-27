<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.998 20.692q-.494.176-1.004.308a12.01 12.01 0 0 1-7.433-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.507-3A12.01 12.01 0 0 0 20.5 6c.676 2.3.648 4.75-.081 7.034M16.997 17v5M21 17v5\"/>";
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

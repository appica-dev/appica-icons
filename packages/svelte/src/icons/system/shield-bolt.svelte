<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.337 20.566q-.656.255-1.343.434a12.01 12.01 0 0 1-7.433-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.507-3A12.01 12.01 0 0 0 20.5 6c.607 2.065.647 4.254.117 6.34M18.999 16l-2.002 3H21l-2.001 3\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12v10m5.957-4.048-4.937 3.703a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4m3-1h12a1 1 0 0 1 1 1v11.17q0 .376-.109.729M12.688 8.7a1.7 1.7 0 0 0 .357-.214L19.7 3.3M3 3l18 18\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12v.01m4.5 7.79v.01M4.2 16.5v.01m0-9.01v.01M12 21a9 9 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18\"/>";
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

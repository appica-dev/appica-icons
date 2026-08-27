<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.5 4.21v.01M4.21 7.5v.01M3 12v.01m1.21 4.49v.01m3.29 3.28v.01M12 21v.01m4.5-1.22v.01m3.29-3.3v.01M21 12v.01M19.79 7.5v.01m-3.29-3.3v.01M12 3v.01\"/>";
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

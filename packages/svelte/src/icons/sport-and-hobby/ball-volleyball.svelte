<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 12a8 8 0 0 0 8 4m-8-4a8 8 0 0 0-7.464 4.928M12 12a8 8 0 0 0-.536-8.928M7.5 13.5A12 12 0 0 0 16 20M12.951 7.353a12 12 0 0 0-9.88 4.111m12.478 3.683a12 12 0 0 0 1.38-10.611M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.364 19.364a9 9 0 0 0-9.72-14.717M6.154 6.156a9 9 0 0 0-.519 13.208m9.9-2.828A5 5 0 0 0 12 8M9 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18\"/>";
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

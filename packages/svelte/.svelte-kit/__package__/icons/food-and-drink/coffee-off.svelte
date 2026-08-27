<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 14c.83.642 2.077 1.017 3.5 1 1.423.017 2.67-.358 3.5-1 .73-.565 1.783-.923 3-.99M8 3q-.292.211-.506.49M12 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m2 3h3v3m-.257 3.743A6 6 0 0 1 11 21H9a6 6 0 0 1-6-6v-5h7m10.116 6.124a3 3 0 0 0-3.118-4.953M3 3l18 18\"/>";
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

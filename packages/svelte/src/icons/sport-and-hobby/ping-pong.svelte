<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.719 20.713a7.64 7.64 0 0 1-7.48-12.755l.72-.72a7.64 7.64 0 0 1 9.105-1.283L17.45 3.61a2.08 2.08 0 0 1 3.057 2.815l-.116.126-2.346 2.387a7.64 7.64 0 0 1-1.052 8.864M9.3 5.3l9.4 9.4M11 18A3 3 0 1 0 17 18a3 3 0 0 0-6 0\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 9h18M3 15h18M8 4c.485.445 3.5 3.312 3.5 8 0 .663-.07 4.848-3.5 8m7-16a17 17 0 0 1 2.004 8c0 1.51-.201 4.628-2.004 8m3.778 0H5.222A2.22 2.22 0 0 1 3 17.778V6.222C3 4.995 3.995 4 5.222 4h13.556C20.005 4 21 4.995 21 6.222v11.556A2.22 2.22 0 0 1 18.778 20\"/>";
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

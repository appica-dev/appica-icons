<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10.366 14.73 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.024 8.373M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.13-.006l-.223.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.144 2.144 0 0 0-.006 3.071z\"/>";
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

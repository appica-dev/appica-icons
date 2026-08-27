<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 12.138 8 9.895l.6-1.02M6 5h12l3 5.099-8.5 9.687A.7.7 0 0 1 12 20a.69.69 0 0 1-.5-.214L3 10.098z\"/>";
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

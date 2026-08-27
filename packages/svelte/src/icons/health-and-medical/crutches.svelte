<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 7a2 2 0 0 0 0-4h-4a2 2 0 1 0 0 4m4 0h-4m4 0v5.092a3 3 0 0 1-.504 1.664l-.992 1.488A3 3 0 0 0 12 16.908M10 7v5.092a3 3 0 0 0 .504 1.664l.992 1.488A3 3 0 0 1 12 16.908M11 21h2m-1 0v-4.092M10 11h4\"/>";
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

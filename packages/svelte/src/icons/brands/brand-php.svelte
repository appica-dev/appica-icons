<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5.5 15 .395-1.974L6.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H6m9.5 2 .395-1.974L16.5 10h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1-.986.836H16m-4-5.5L11 13m.6-3H14l-.5 3M2 12c0 2.387 1.054 4.676 2.929 6.364S9.348 21 12 21s5.196-.948 7.071-2.636S22 14.387 22 12s-1.054-4.676-2.929-6.364S14.652 3 12 3s-5.196.948-7.071 2.636S2 9.613 2 12\"/>";
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

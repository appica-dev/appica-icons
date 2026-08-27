<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m-9 9c0 2.21 4.03 4 9 4s9-1.79 9-4M3 12c0-2.21 4.03-4 9-4s9 1.79 9 4m-9 9a9 9 0 0 0 9-9m-9 9c-1.06 0-2.078-.948-2.828-2.636S8 14.387 8 12s.421-4.676 1.172-6.364S10.939 3 12 3m0 18c1.06 0 2.078-.948 2.828-2.636S16 14.387 16 12s-.421-4.676-1.172-6.364S13.061 3 12 3m9 9a9 9 0 0 0-9-9\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.065 17.93c.361-.092.646-.425 1.217-1.091l4.927-5.756c1.813-2.119 2.507-5.08.858-7.57-.547-.826-1.46-.533-2.03.031L2.545 18.857a1.826 1.826 0 0 0 0 2.604c.824.815 2.195.689 2.854-.262.899-1.3 2.307-4.642 3.875-5.236 1.627-.616 2.194 2.374 3.79 1.967\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18M14.828 9.172A4 4 0 0 1 16 12m1.657-5.657a8 8 0 0 1 1.635 8.952m-10.124-.467a4 4 0 0 1 0-5.656m-2.831 8.485a8 8 0 0 1 0-11.314\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 14H9m5-2.828a3 3 0 1 0 0 5.656M8.485 21h7.026a4 4 0 0 0 3.808-5.224l-1.706-5.306A5 5 0 0 0 12.854 7h-1.71a5 5 0 0 0-4.76 3.47l-1.706 5.306A4 4 0 0 0 8.486 21M15 3q-1 4-3 4T9 3z\"/>";
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

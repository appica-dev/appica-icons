<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.877 7.88-4.56 7.53a1.99 1.99 0 0 0 .266 2.484l2.527 2.523c.374.373.88.583 1.408.583h8.964c.528 0 1.034-.21 1.408-.583l1.264-1.263m1.792-2.205a1.99 1.99 0 0 0-.262-1.538L12.838 2.457A1 1 0 0 0 12 1.999m0 0a1 1 0 0 0-.838.458L9.39 5.383M12 1.999l-1.254 4.743M12 1.999l2.153 8.141m-4.248-.221L7 20.9m8.597-5.303L17 20.9M3 3l18 18\"/>";
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

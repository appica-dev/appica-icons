<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 5 4.586 5.836a1.844 1.844 0 0 1 0 2.328L17 19M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L13 19m-3.775-.588A1.6 1.6 0 0 1 8 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.36-5.248A1.6 1.6 0 0 1 8 5c.468 0 .914.214 1.225.588l4.36 5.248a1.844 1.844 0 0 1 0 2.328z\"/>";
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
